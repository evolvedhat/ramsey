// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/erdos`
  | `/notesPage`
  | `/pigeonhole`
  | `/rado`
  | `/ramsey`
  | `/ramseyProblems`
  | `/ramseyQ1`
  | `/ramseyQ2`
  | `/ramseyThm`
  | `/schur`
  | `/vanDerWaerden`
  | `/vanNotesPage`
  | `/vanProblems`
  | `/vanQ1`
  | `/vanThm1`
  | `/vanThm2`
  | `/vanThm3`
  | `/vanThm4`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
