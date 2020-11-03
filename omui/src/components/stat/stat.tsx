import React from 'react';
import {
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatProps as IStatProps
} from '@chakra-ui/core';

type StatProps = IStatProps & {
  label: string;
  value: string;
  arrow?: 'increase' | 'decrease';
  help: string;
};

type StatGroupProps = {
  stats: StatProps[];
};

const Stat = ({ stats, ...props }: StatGroupProps) => (
  <StatGroup {...props}>
    {stats.map(({ label, value, arrow, help, ...stat }: StatProps) => (
      <Stat key={label} {...stat}>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        {help && (
          <StatHelpText>
            {arrow && <StatArrow type={arrow} />}
            {help}
          </StatHelpText>
        )}
      </Stat>
    ))}
  </StatGroup>
);

export { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup };
