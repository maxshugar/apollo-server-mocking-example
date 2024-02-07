import { useMutation } from "@apollo/client";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ADD_BOOK_MUTATION } from "../gql/mutation";

export const AddBookButton = () => {
	const [addBook, { data, loading, error }] = useMutation(ADD_BOOK_MUTATION);

	console.log({ data, loading, error })

	return (
		<TouchableOpacity
			style={{ padding: 10, backgroundColor: "lightblue", justifyContent: "center", alignItems: "center" }}
			onPress={() => {
				addBook({
					variables: {
						input: {
							title: "New Book",
							publishedAt: new Date().toISOString(),
						}
					},
				});
			}}
		>
			<Text>Add Book</Text>
		</TouchableOpacity>
	);
};