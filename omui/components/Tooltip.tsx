import * as React from "react"
import { theme } from "../theme"
import styled from "styled-components"

// Types
export type Props = {
  /** Arrow position */
  arrow?: "top" | "right" | "bottom" | "left"

  /** Set error state  */
  error?: boolean
}

// Component
export const Tooltip: React.FC<Props> = ({
  arrow = "left",
  error,
  children
}) => (
  <StyledTooltip className={`${error ? "error" : ""} ${arrow ? arrow : ""}`}>
    {children}
  </StyledTooltip>
)

// Styling
const StyledTooltip = styled.span`
  background: ${theme.color.bodyLight};
  font-size: 11px;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  font-weight: 600;
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
  }
  &.top:before,
  &.bottom:before {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    left: 50%;
    transform: translateX(-2px);
  }
  &.top:before {
    top: -4px;
    border-bottom: 4px solid ${theme.color.bodyLight};
  }
  &.bottom:before {
    bottom: -4px;
    border-top: 4px solid ${theme.color.bodyLight};
  }
  &.right:before,
  &.left:before {
    top: 7px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
  &.right:before {
    right: -4px;
    border-left: 4px solid ${theme.color.bodyLight};
  }
  &.left:before {
    left: -4px;
    border-right: 4px solid ${theme.color.bodyLight};
  }

  &.error {
    background: ${theme.color.danger};
  }
  &.error.top:before {
    border-bottom-color: ${theme.color.danger};
  }
  &.error.right:before {
    border-left-color: ${theme.color.danger};
  }
  &.error.bottom:before {
    border-top-color: ${theme.color.danger};
  }
  &.error.left:before {
    border-right-color: ${theme.color.danger};
  }
`
