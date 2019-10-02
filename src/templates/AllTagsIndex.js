import React from "react"
import Tags from "../components/Tags"

const AllTagsTemplate = ({ pageContext: { tags } }) => <Tags tags={tags} />

export default AllTagsTemplate
