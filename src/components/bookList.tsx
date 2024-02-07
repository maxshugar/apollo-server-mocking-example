import { useQuery } from "@apollo/client";
import { StyleSheet, Text, View } from "react-native";
import { GET_BOOKS_QUERY } from "../gql/query";

export const BookList = () => {
	const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error: {error.message}</Text>;
	return (
		<View>
			{data.getBooks.map((book: { title: string; publishedAt: string }, index: number) => (
				<View key={index} style={styles.container} >
					<Text>Title: {book.title}</Text>
					<Text>Published At: {book.publishedAt}</Text>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: '#d3d3d3',
		borderColor: 'blue',
		borderWidth: 2,
		margin: 5
	}
});
