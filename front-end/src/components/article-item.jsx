import { Eye, MessageSquare, Crown } from "lucide-react";
export default function ArticleItem({ author, content, imageUrl }) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 overflow-hidden">
      <div className="relative aspect-[1/1] flex ">
        <div className="z-20 flex flex-col justify-between p-4">
          <div className="text-black text-xl z-20">
            <div className="flex items-center gap-2">
              <p>{author}</p>
              <Crown strokeWidth={1.5} size={18} />
            </div>
            <div className="text-sm font-thin">20-12-2024</div>
          </div>
          <div className="text-black text-xl z-20">
            <p className="text-2xl font-semibold">{content}</p>
            <div className="h-[0.8px] my-2 w-full bg-white" />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-base font-thin">
                <Eye size={18} strokeWidth={1.5} />
                200
              </div>
              <div className="flex items-center gap-2 text-base font-thin">
                <MessageSquare size={18} strokeWidth={1.5} />
                20
              </div>
            </div>
          </div>
        </div>

        <img
          alt="Thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
          src={imageUrl}
        />
      </div>
    </div>
  );
}
