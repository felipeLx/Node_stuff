import styled from '../../themes';

const StyledThemeSelector = styled("div")`
 padding: 14px;
 text-align: left;
 border-bottom: 1px solid ${props => props.theme.primaryDarkColor};
 
 label {
  font-size: 1.2em;
 }
`;

export default StyledThemeSelector;