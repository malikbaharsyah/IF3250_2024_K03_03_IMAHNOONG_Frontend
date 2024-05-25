import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    fontSize: '2.5rem',
    color: theme.palette.mode === 'light' ? '#2224A1' : '#2224A1',
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
    selectedIcon: React.ReactElement;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" style={{ fontSize: '3rem' }} />,
    selectedIcon: <SentimentVeryDissatisfiedIcon color="error" style={{ fontSize: '4rem' }} />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" style={{ fontSize: '3rem' }} />,
    selectedIcon: <SentimentDissatisfiedIcon color="error" style={{ fontSize: '4rem' }} />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" style={{ fontSize: '3rem' }} />,
    selectedIcon: <SentimentSatisfiedIcon color="warning" style={{ fontSize: '4rem' }} />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" style={{ fontSize: '3rem' }} />,
    selectedIcon: <SentimentSatisfiedAltIcon color="success" style={{ fontSize: '4rem' }} />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" style={{ fontSize: '3rem' }} />,
    selectedIcon: <SentimentVerySatisfiedIcon color="success" style={{ fontSize: '4rem' }} />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return (
    <span style={{ fontSize: '4rem' }} {...other}>
      {value !== null ? customIcons[value].selectedIcon : customIcons[value].icon}
    </span>
  );
}

export default function RadioGroupRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}