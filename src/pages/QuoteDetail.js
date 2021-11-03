import { Route, useParams } from 'react-router';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Mini', text: 'Learning React is cool!' },
	{ id: 'q2', author: 'Jimnya', text: 'Learning React is fun!' }
];

const QuoteDetail = () => {
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No quote find!</p>;
	}

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetail;
