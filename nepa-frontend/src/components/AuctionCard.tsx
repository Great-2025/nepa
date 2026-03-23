import React from 'react';

interface AuctionCardProps {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  endTime: Date;
  imageUrl?: string;
  onBid?: (id: string) => void;
}

const AuctionCard: React.FC<AuctionCardProps> = ({
  id,
  title,
  description,
  currentBid,
  endTime,
  imageUrl,
  onBid
}) => {
  const timeLeft = Math.max(0, Math.floor((endTime.getTime() - Date.now()) / (1000 * 60 * 60 * 24)));
  
  return (
    <article className="bg-card border border-border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-ring">
      {imageUrl && (
        <div className="w-full h-48 bg-gray-200 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Current Bid</span>
            <span className="text-lg sm:text-xl font-bold text-primary">
              ${currentBid.toLocaleString()}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Time Left</span>
            <span className={`text-sm font-medium ${timeLeft <= 24 ? 'text-destructive' : 'text-foreground'}`}>
              {timeLeft}d {timeLeft > 0 ? 'left' : 'ended'}
            </span>
          </div>
          
          {onBid && timeLeft > 0 && (
            <button
              onClick={() => onBid(id)}
              className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200 text-sm sm:text-base font-medium"
            >
              Place Bid
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default AuctionCard;
