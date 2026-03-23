import React, { useState } from 'react';
import AuctionCard from './AuctionCard';

interface Auction {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  endTime: Date;
  imageUrl?: string;
  category?: string;
}

interface AuctionListProps {
  auctions: Auction[];
  onBid?: (id: string) => void;
}

const AuctionList: React.FC<AuctionListProps> = ({ auctions, onBid }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(auctions.map(auction => auction.category).filter(Boolean))];
  
  const filteredAuctions = auctions.filter(auction => 
    selectedCategory === 'all' || auction.category === selectedCategory
  );

  return (
    <section className="w-full" aria-labelledby="auctions-heading">
      <div className="mb-6 sm:mb-8">
        <h2 id="auctions-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Active Auctions
        </h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredAuctions.map((auction) => (
          <div key={auction.id} className="w-full">
            <AuctionCard
              {...auction}
              onBid={onBid}
            />
          </div>
        ))}
      </div>

      {filteredAuctions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No auctions found in this category.</p>
        </div>
      )}
    </section>
  );
};

export default AuctionList;
