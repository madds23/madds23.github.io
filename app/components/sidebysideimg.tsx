interface SideBySideProps {
  headerImgSrc?: string;
  textContent: string;
  imgSrc: string;
  imgSide: "left" | "right";
}

export function SideBySide({ headerImgSrc, textContent, imgSrc, imgSide }: SideBySideProps) {
  const textDiv = (
    <div className="p-4 basis-1/2">
      {headerImgSrc && <img src={headerImgSrc} alt="header" className="" />}
      <p className="px-8 py-4">{textContent}</p>
    </div>
  );

  const imgDiv = (
    <div className="m-4 flex justify-center items-center basis-1/2 overflow-hidden rounded-md shadow-md max-h-128">
      <img src={imgSrc} alt="side" className="min-w-full min-h-full object-cover" />
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {imgSide === "left" ? (
        <>
          {imgDiv}
          {textDiv}
        </>
      ) : (
        <>
          {textDiv}
          {imgDiv}
        </>
      )}
    </div>
  );
}

