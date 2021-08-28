import PropTypes from "prop-types";
import { RandomColor } from "../../utils";
import {
  StatisticsSection,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  ItemLabel,
  ItemPercentage,
} from "./Statistics.styled";
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <StatisticTitle title={title}>{title}</StatisticTitle>

      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id} bgColor={RandomColor()}>
              <ItemLabel>{label}</ItemLabel>
              <ItemPercentage>{percentage}%</ItemPercentage>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
