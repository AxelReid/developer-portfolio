interface Props {
  name: string;
}

const Tag: React.FC<Props> = ({ name }) => {
  return (
    <div className="rounded bg-zinc-700 py-1 px-2 text-xs text-zinc-50">
      {name}
    </div>
  );
};

export default Tag;
