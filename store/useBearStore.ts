import { create } from "zustand";
import { ThemeSlice, createThemeSlice } from "./slice/themeSlice";

type AppStor = ThemeSlice

const counter = create<AppStor>((...a) => ({
 ...createThemeSlice(...a)
}))

export default counter