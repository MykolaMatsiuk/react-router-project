import { useEffect } from 'react';
import { Route, useParams } from 'react-router';
import { Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
	const {
		sendRequest,
		status,
		error,
		data: loadedQuote
	} = useHttp(getSingleQuote, true);
	const params = useParams();
	const match = useRouteMatch();
	const { quoteId: id } = params;

	useEffect(() => {
		sendRequest(id);
	}, [sendRequest, id]);

	if (status === 'pending') {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (!loadedQuote.text) {
		return <p>No quote find!</p>;
	}

	return (
		<>
			<HighlightedQuote
				text={loadedQuote.text}
				author={loadedQuote.author}
			/>
			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetail;
