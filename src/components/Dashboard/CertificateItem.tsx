import { api } from "@utils/api";
import Image from "next/image";
import { memo, useState } from "react";
import type { CertificateType, ImageType } from "src/types/infer";
import Carousel from "@components/Carousel";
import {
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import LoadingOverlay from "@components/Overlay/Loading";
import Link from "next/link";
import Switcher from "@components/Switcher";

const CloseIcon = ({ click }: { click: () => void }) => (
  <button
    onClick={click}
    className="b absolute top-2 left-2 z-[1] rounded-full !bg-opacity-60 p-1 hover:!bg-opacity-100"
  >
    <XMarkIcon className="w-6" />
  </button>
);

interface Props {
  data?: CertificateType;
}

const CertificateItem: React.FC<Props> = ({ data }) => {
  const util = api.useContext();
  const refetch = () => util.certificate.getAll.invalidate();
  const images = api.images.getAll.useQuery(undefined, { enabled: false });
  const add = api.certificate.create.useMutation({ onSuccess: refetch });
  const update = api.certificate.update.useMutation({ onSuccess: refetch });
  const dl = api.certificate.remove.useMutation({ onSuccess: refetch });
  const publish = api.certificate.publish.useMutation();

  const [image, setImage] = useState<
    ImageType | { url: string; id: string } | undefined
  >(data?.image || undefined);
  const [url, setUrl] = useState(data?.url || "");
  const [openImgs, setOpenImgs] = useState(false);
  const [isEdit, setIsEdit] = useState(data ? false : true);

  const loading =
    add.isLoading || update.isLoading || dl.isLoading || publish.isLoading;

  const submit = async () => {
    try {
      if (!image) return;
      if (data) {
        await update.mutateAsync({ id: data.id, imageId: image.id, url });
        setIsEdit(false);
      } else {
        await add.mutateAsync({
          imageId: image.id,
          url,
        });
        setUrl("");
        setImage(undefined);
        setOpenImgs(false);
      }
    } catch (error) {}
  };

  return (
    <div id="hover-card" className="rounded-lg p-4">
      <span id="hover-card-overlay" />
      <div className="relative flex aspect-video w-full overflow-hidden rounded-[inherit]">
        {image ? (
          <>
            {isEdit && <CloseIcon click={() => setImage(undefined)} />}
            <Image
              src={image.url}
              fill
              className="rounded-[inherit] object-cover"
              alt=""
              sizes="400px"
            />
          </>
        ) : openImgs ? (
          images.data ? (
            <>
              {<CloseIcon click={() => setOpenImgs(false)} />}
              <Carousel rootClassName="flex-1 h-full" className="h-full gap-4">
                {images?.data?.map((img) => (
                  <button
                    onDoubleClick={() => setImage(img)}
                    key={img.id}
                    className="embla__slide bb relative h-full flex-[85%] flex-shrink-0 rounded-lg"
                  >
                    <Image
                      src={img.url}
                      fill
                      className="rounded-[inherit] object-cover"
                      alt=""
                      sizes="400px"
                    />
                  </button>
                ))}
              </Carousel>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center rounded-[inherit] bg-zinc-100/30 dark:bg-black/10">
              {!images.isFetching && (
                <span className="c-secondary mb-2 text-sm italic">
                  {"Couldn't"} load
                </span>
              )}
              <button
                disabled={images.isFetching}
                //eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => images.refetch()}
                className="underline"
              >
                {images.isLoading ? "Fetching..." : "Reload"}
              </button>
            </div>
          )
        ) : (
          <button
            onClick={() => {
              setOpenImgs(true);
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              images.refetch();
            }}
            className="br flex w-full flex-col items-center justify-center rounded-[inherit] border-dashed bg-zinc-100/30 dark:bg-black/10"
          >
            <span className="c-secondary text-sm">Choose picture</span>
            {data?.image && (
              <div
                className="mt-2 underline"
                onClick={(e) => {
                  e.stopPropagation();
                  setImage(data.image as ImageType);
                }}
              >
                Use original
              </div>
            )}
          </button>
        )}
      </div>
      <div className="mt-4 flex space-x-3">
        {isEdit ? (
          <>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="btn w-full rounded-lg py-1 text-sm"
              placeholder="Proof link (possibly)"
            />
            <button
              disabled={loading || !image}
              className="btn btn-darker relative py-1"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={submit}
            >
              <span className={`${loading ? "opacity-0" : ""}`}>
                {data ? "Update" : "Add"}
              </span>
              {loading && (
                <LoadingOverlay
                  root={{ className: "!bg-transparent" }}
                  spinner={{ className: "w-4" }}
                />
              )}
            </button>
          </>
        ) : (
          <>
            <Link
              href={url}
              target="_blank"
              className="truncate text-sm font-medium text-cyan-600"
            >
              {url}
            </Link>
          </>
        )}
      </div>
      {data && (
        <div className="mt-4 flex items-center justify-between">
          <Switcher
            size="small"
            checked={publish.data ?? data.published}
            loading={loading}
            onChange={(checked) =>
              publish.mutate({ id: data.id, published: checked })
            }
            label="Published"
          />
          <div className="flex items-center space-x-2">
            <button
              disabled={loading}
              className="p-1"
              /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
              onClick={() => setIsEdit((prev) => !prev)}
            >
              {isEdit ? (
                <XMarkIcon className="h-5 w-5 text-red-500" />
              ) : (
                <PencilSquareIcon className="h-4 w-4 text-blue-500" />
              )}
            </button>
            <button
              disabled={loading}
              className="p-1"
              /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
              onClick={() => dl.mutateAsync({ id: data.id })}
            >
              <TrashIcon className="h-4 w-4 text-red-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(CertificateItem);
