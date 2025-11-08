import React from "react";
import type { MarketplaceItem } from "../types";

interface MarketplaceCardProps {
  item: MarketplaceItem;
  onClick?: () => void;
}

export const MarketplaceCard: React.FC<MarketplaceCardProps> = ({
  item,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-4xl">{item.imageUrl || "📦"}</span>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900 mb-1">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                {item.seller.avatar} {item.seller.name}
              </span>
            </div>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            item.status === "available"
              ? "bg-green-100 text-green-800"
              : item.status === "sold"
              ? "bg-gray-100 text-gray-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {item.status}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {item.description}
      </p>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-indigo-600">
            {item.price}
          </span>
          <span className="text-sm text-gray-500">coins</span>
        </div>
        <span
          className={`px-3 py-1 rounded-lg text-xs font-medium ${
            item.type === "service"
              ? "bg-blue-100 text-blue-800"
              : item.type === "product"
              ? "bg-purple-100 text-purple-800"
              : "bg-orange-100 text-orange-800"
          }`}
        >
          {item.type}
        </span>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
          {item.category}
        </span>
      </div>
    </div>
  );
};
