import Image from "next/image";

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

export default function PostCard({ image, title, body }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
      <img
        className="w-full"
        src={`${assetsUrl}/${image}`}
        alt="Sunset in the mountains"
      />
      {/* <Image
        className="w-full"
        src={`${assetsUrl}/${image}`}
        alt="Sunset in the mountains"
        width={500}
        height={500}
      /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-grey-darker text-base">{body}</p>
      </div>
    </div>
  );
}
