import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Home from '../../pages';
import Layout from '../../components/Layout';

describe('Dashboard Page', () => {
  it('Renders the home page correctly', () => {
    render(<Layout><Home /></Layout>);
    expect(screen.getByText('THE')).toBeInTheDocument();
    expect(screen.getByText('REVOLUTION')).toBeInTheDocument();
    expect(screen.getByText('XCAD Network is pioneering the #Watch2Earn revolution for 2.1bn active YouTube users, enabling fans to earn Creator token rewards for watching their favorite Creators.')).toBeInTheDocument();
    expect(screen.getByText('Watch Our Video')).toBeInTheDocument();

    })
});
    