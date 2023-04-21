import styled from 'styled-components';

const Img = styled.div`
	border-radius: 15px;
	background-image: url(${({ imgUrl }) => imgUrl});
	height: 300px;
	background-position: center;
	/* background-repeat: no-repeat; */
	background-size: cover;
	position: relative;

	& > button {
		position: absolute;
		right: 10px;
		top: 10px;
	}
`;

const LikeButton = styled.button`
	border: none;
	background-color: unset;
`;

const Svg = styled.svg`
	display: block;
	fill: rgba(0, 0, 0, 0.5);
	height: 24px;
	width: 24px;
	stroke: #ffffff;
	stroke-width: 2;
	overflow: visible;
`;

function AccomodationImage({ imgUrl }) {
	return (
		<>
			<Img imgUrl={imgUrl}>
				<LikeButton>
					<Svg viewBox='0 0 32 32'>
						<path d='m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z'></path>
					</Svg>
				</LikeButton>
			</Img>
		</>
	);
}

export default AccomodationImage;
