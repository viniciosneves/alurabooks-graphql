import { makeVar } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";

export const livrosVar = makeVar<ILivro[]>([])