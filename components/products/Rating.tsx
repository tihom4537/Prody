export const Rating = ({ caption }: { caption: string }) => {
  return (
    <div className="flex gap-2 ">
      {caption && <span className="text-[12px]">{caption}</span>}
    </div>
  );
};
