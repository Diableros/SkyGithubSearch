import styled from "@emotion/styled"

export const SearchState = styled.pre`
	position: fixed;
	top: 0;
	left: 0;

	padding: 1rem;

	font-size: 1.2rem;
	color: ${({theme}) =>theme.colors.textPrimary40};
	text-align: left;
`