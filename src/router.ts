// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/cnNotesPage`
  | `/cnThm1`
  | `/cnThm2`
  | `/erdos`
  | `/esNotesPage`
  | `/esThm1`
  | `/esThm2`
  | `/hjNotesPage`
  | `/hjThm1`
  | `/hjThm2`
  | `/notesPage`
  | `/pigeonhole`
  | `/rSol1`
  | `/rado`
  | `/radoNotesPage`
  | `/radoThm`
  | `/ramsey`
  | `/ramseyProblems`
  | `/ramseyQ1`
  | `/ramseyQ2`
  | `/ramseyThm`
  | `/schur`
  | `/schurNotesPage`
  | `/schurProblems`
  | `/schurQ1`
  | `/schurQ2`
  | `/schurThm`
  | `/vanDerWaerden`
  | `/vanNotesPage`
  | `/vanProblems`
  | `/vanQ1`
  | `/vanQ2`
  | `/vanQ3`
  | `/vanQ4`
  | `/vanQ5`
  | `/vanQ6`
  | `/vanThm1`
  | `/vanThm2`
  | `/vanThm3`
  | `/vanThm4`
  | `/vidSolutions`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
