import React from "react";
import { BiCalendar, BiCalendarEdit } from "react-icons/bi";

export interface Props {
  datetime: string | Date;
  icon?: React.ReactElement;
  size?: "sm" | "lg"; // icon scaling
  className?: string;
}

export const Datetime = function ({
  datetime,
  icon = <BiCalendar />,
  size = "sm",
  className,
}: Props) {
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className}`}>
      {React.cloneElement(
        icon,
        {
          className: `${icon.props.className} ${
            size === "sm" ? "scale-90" : "scale-100"
          } inline-block h-6 w-6 fill-skin-base`,
        },
        null
      )}
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDate datetime={datetime} />
      </span>
    </div>
  );
};

const FormattedDate = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // const time = myDatetime.toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });

  return <>{date}</>;
};

export const CreatedDatetime = ({ icon, ...rest }: Props) => (
  <Datetime icon={<BiCalendar />} {...rest} />
);

export const UpdatedDatetime = ({ icon, ...rest }: Props) => (
  <Datetime icon={<BiCalendarEdit />} {...rest} />
);
