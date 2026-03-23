import React, { useState } from 'react';
import AuctionList from '../components/AuctionList';

interface Auction {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  endTime: Date;
  imageUrl?: string;
  category?: string;
}

const AuctionPage: React.FC = () => {
  const [auctions] = useState<Auction[]>([
    {
      id: '1',
      title: 'Premium Electricity Package - 1000kWh',
      description: 'High-quality electricity allocation for residential use. Perfect for households with high energy consumption needs.',
      currentBid: 150,
      endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      category: 'electricity'
    },
    {
      id: '2',
      title: 'Water Allocation - 5000 Gallons',
      description: 'Clean water allocation for industrial or commercial use. Includes delivery and storage options.',
      currentBid: 75,
      endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
      imageUrl: 'https://images.unsplash.com/photo-1548484352-ea579e5233a8?w=400&h=300&fit=crop',
      category: 'water'
    },
    {
      id: '3',
      title: 'Natural Gas Package - 1000 Therms',
      description: 'Premium natural gas allocation for heating and industrial applications. Competitive pricing with flexible delivery.',
      currentBid: 200,
      endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      imageUrl: 'https://images.unsplash.com/photo-1606094626221-aed2e10a4a67?w=400&h=300&fit=crop',
      category: 'gas'
    },
    {
      id: '4',
      title: 'Solar Energy Credits - 500 kWh',
      description: 'Renewable energy credits from solar installations. Environmentally friendly option with tax benefits.',
      currentBid: 125,
      endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
      category: 'electricity'
    },
    {
      id: '5',
      title: 'Emergency Water Supply - 2000 Gallons',
      description: 'Emergency water supply for critical infrastructure. Includes rapid deployment and 24/7 support.',
      currentBid: 300,
      endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'water'
    },
    {
      id: '6',
      title: 'Industrial Gas Bundle - 2000 Therms',
      description: 'Bulk natural gas package for industrial operations. Volume discounts available for long-term contracts.',
      currentBid: 450,
      endTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
      imageUrl: 'https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?w=400&h=300&fit=crop',
      category: 'gas'
    }
  ]);

  const handleBid = (auctionId: string) => {
    alert(`Bid placed for auction ${auctionId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">NEPA Auction Platform</h1>
            <nav className="flex gap-2 sm:gap-4">
              <button className="px-3 sm:px-4 py-2 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </button>
              <button className="px-3 sm:px-4 py-2 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                My Bids
              </button>
              <button className="px-3 sm:px-4 py-2 text-sm sm:text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Profile
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Active Auctions</h3>
            <p className="text-2xl font-bold text-foreground">{auctions.length}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Value</h3>
            <p className="text-2xl font-bold text-foreground">
              ${auctions.reduce((sum, a) => sum + a.currentBid, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Ending Soon</h3>
            <p className="text-2xl font-bold text-foreground">
              {auctions.filter(a => a.endTime.getTime() - Date.now() < 3 * 24 * 60 * 60 * 1000).length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Categories</h3>
            <p className="text-2xl font-bold text-foreground">3</p>
          </div>
        </section>

        {/* Auctions List */}
        <AuctionList auctions={auctions} onBid={handleBid} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © 2024 NEPA Platform. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuctionPage;
