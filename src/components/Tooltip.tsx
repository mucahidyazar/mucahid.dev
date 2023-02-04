'use client'
import 'react-popper-tooltip/dist/styles.css';
import React from 'react';
import { usePopperTooltip, Config as TTooltipConfig } from 'react-popper-tooltip';

interface ITooltipProps {
  children: React.ReactNode;
  content: React.ReactNode | string;
  active?: boolean;
  tooltipConfig?: TTooltipConfig;
}
export default function Tooltip({
  children,
  content,
  active = true,
  tooltipConfig = {}
}: ITooltipProps) {
  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip(tooltipConfig);

  return (
    <div>
      <div ref={setTriggerRef}>{children}</div>
      {active && visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: 'tooltip-container' })}
        >
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
          {content}
        </div>
      )}
    </div>
  );
}