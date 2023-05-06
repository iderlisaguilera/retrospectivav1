import React from 'react'

const ReviewContext = React.createContext()

export const ReviewProvider = ReviewContext.Provider
export const ReviewConsumer = ReviewContext.Consumer

export default ReviewContext