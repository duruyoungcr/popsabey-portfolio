import React, { createContext, useState } from "react";


export const LoadingContext = createContext({
    loading: false,
    setLoading: (loading: boolean) => { },
})


