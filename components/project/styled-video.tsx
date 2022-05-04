import Image from "next/image";

export function StyledVideo({ video, img }: { video: string; img: any }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "358px", margin: "auto", zIndex: "1" }}>
        <Image src={img} layout="responsive" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
        }}
      >
        <video
          // controls
          autoPlay
          loop
          style={{ width: "200px", margin: "auto" }}
          controlsList="hide"
          muted={true}
        >
          <source src={video} />
        </video>
      </div>
    </div>
  );
}
