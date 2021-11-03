import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Mini', text: 'Learning React is cool!' },
	{ id: 'q2', author: 'Jimnya', text: 'Learning React is fun!' }
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
