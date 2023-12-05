import { render, screen } from '@testing-library/react';
import PriceChart from '../../components/PriceChart';

describe('PriceChart Component', () => {
  it('renders the chart correctly', () => {
    const mockData = [
      { day: 'Day 1', price: 1.1 },
      { day: 'Day 2', price: 1.2 },
      { day: 'Day 3', price: 1.3 },
      { day: 'Day 4', price: 1.4 },
      { day: 'Day 5', price: 1.5 },
      { day: 'Day 6', price: 1.6 },
      { day: 'Day 7', price: 1.7 },
    ];
    
    render(<PriceChart data={mockData} />)
    expect(screen.getByText('Day 1')).toBeInTheDocument();
    expect(screen.getByText('Day 2')).toBeInTheDocument();
    expect(screen.getByText('Day 3')).toBeInTheDocument();
    expect(screen.getByText('Day 4')).toBeInTheDocument();
    expect(screen.getByText('Day 5')).toBeInTheDocument();
    expect(screen.getByText('Day 6')).toBeInTheDocument();  
    expect(screen.getByText('Day 7')).toBeInTheDocument();
  });  
});

