import React from "react";
import { useApp } from "../context/AppContext";
import { MarketplaceCard } from "../components/MarketplaceCard";

const Marketplace: React.FC = () => {
  const { marketplaceItems } = useApp();

  const availableItems = marketplaceItems.filter(
    (item) => item.status === "available"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
        <p className="text-sm text-gray-600">
          Buy and sell services, products, and expertise
        </p>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex gap-4 overflow-x-auto">
          <div className="flex-shrink-0">
            <div className="text-xs text-gray-600">Total Items</div>
            <div className="text-lg font-bold text-indigo-600">
              {marketplaceItems.length}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="text-xs text-gray-600">Available</div>
            <div className="text-lg font-bold text-green-600">
              {availableItems.length}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="text-xs text-gray-600">Services</div>
            <div className="text-lg font-bold text-blue-600">
              {marketplaceItems.filter((i) => i.type === "service").length}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="text-xs text-gray-600">Products</div>
            <div className="text-lg font-bold text-purple-600">
              {marketplaceItems.filter((i) => i.type === "product").length}
            </div>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          Available Items
        </h2>
        {availableItems.length > 0 ? (
          availableItems.map((item) => (
            <MarketplaceCard key={item.id} item={item} />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-gray-500">No items available at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
