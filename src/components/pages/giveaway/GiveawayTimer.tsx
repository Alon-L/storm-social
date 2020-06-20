import React, { Component, ReactNode } from 'react';

export interface GiveawayTimerProps {
  initialRemaining: number;
}

interface GiveawayTimerState {
  remaining: number;
}

const padTime = (time: number): string => {
  return time.toString().padStart(2, '0');
};

const msToTime = (s: number): string => {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;

  return `${padTime(hrs)}:${padTime(mins)}:${padTime(secs)}`;
};

class GiveawayTimer extends Component<GiveawayTimerProps, GiveawayTimerState> {
  state = {
    remaining: this.props.initialRemaining,
  };

  private interval!: NodeJS.Timeout;

  public componentDidMount(): void {
    this.startInterval();
  }

  public componentDidUpdate(prevProps: Readonly<GiveawayTimerProps>): void {
    if (this.props !== prevProps) {
      clearInterval(this.interval);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ remaining: this.props.initialRemaining });
      this.startInterval();
    }
  }

  private startInterval = () => {
    this.interval = setInterval(() => {
      const { remaining } = this.state;

      if (remaining <= 0) {
        clearInterval(this.interval);
        return;
      }

      this.setState({ remaining: remaining - 1000 });
    }, 1000);
  };

  render(): ReactNode {
    const { remaining } = this.state;

    return <p className="font-semibold text-2xl">{msToTime(remaining)}</p>;
  }
}

export default GiveawayTimer;