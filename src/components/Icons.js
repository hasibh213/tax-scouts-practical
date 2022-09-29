import styled from "styled-components";
import { Search } from "@styled-icons/evaicons-solid/Search";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { Amazon } from "@styled-icons/fa-brands/Amazon";

export const SearchIcon = styled(Search)`
  color: #ff98ec;
  width: 24px;
  height: 24px;
  padding: 0px;
`;

export const ExitIcon = styled(CloseOutline)`
  color: #fe4ddd;
  width: 24px;
  height: 24px;
`;

export const AmazonIcon = styled(Amazon)`
  width: 24px;
  height: 24px;
  color: black;
  background-color: darkblue;
  position: absolute;
`;
