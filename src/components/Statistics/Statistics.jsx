import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { StatTitle } from './Statistics.styled';
import { StatisticsItem } from 'components/Statistics/StatisticsItem';

export const Statistics = ({ stats, title }) => {
    return (
      <Box
        as="section"
        bg="backgroundSecondary"
        width="50%"
        mb="40px"
        borderRadius="normal"
        p="20px"
        boxShadow="default"
      >
        {title && <StatTitle>{title}</StatTitle>}
  
        <Box
          as="ul"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          {stats.map(stat => (
            <StatisticsItem stat={stat} key={stat.id} />
          ))}
        </Box>
      </Box>
    );
  };
  
  Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
    title: PropTypes.string,
  };