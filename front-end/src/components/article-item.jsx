import { Eye, MessageSquare, Crown } from "lucide-react";
export default function ArticleItem() {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 overflow-hidden">
      <div className="relative aspect-[1/1] flex ">
        <div className="z-20 flex flex-col justify-between p-4">
          <div className="text-white text-xl z-20">
            <div className="flex items-center gap-2">
              <p>Vũ Luân Nguyễn </p>
              <Crown strokeWidth={1.5} size={18} />
            </div>
            <div className="text-sm font-thin">20-12-2024</div>
          </div>
          <div className="text-white text-xl z-20">
            <p className="text-2xl font-semibold">
              5 interior trends that are trending in 2024
            </p>
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
          height={300}
          src="https://images.unsplash.com/photo-1640461470346-c8b56497850a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvYXJkJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D"
          width={300}
        />
      </div>
    </div>
  );
}
