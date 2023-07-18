"use client";

import { InformationCircleIcon } from "@heroicons/react/solid";

import React from "react";

import {
  Card,
  Grid,
  Title,
  Text,
  BadgeDelta,
  DeltaType,
  Flex,
  Badge,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Callout,
} from "@tremor/react";

export type Demandes = {
  name: string;
  media: string;
  match: string;
  deadline: number;
  nationalite: string;
  status: any;
};

export const requests: Demandes[] = [
  {
    name: "Peter Doe",
    media: "L'Express",
    match: "FID-NZL",
    deadline: 12,
    nationalite: "Français",
    status: "En attente",
  },
  {
    name: "Peter Doe",
    media: "L'Express",
    match: "FRA-NED",
    deadline: 12,
    nationalite: "low",
    status: "Accepté",
  },
  {
    name: "Peter Doe",
    media: "L'Express",
    match: "1,000,000",
    deadline: 12,
    nationalite: "low",
    status: "Refusé",
  },
  {
    name: "Peter Doe",
    media: "L'Express",
    match: "1,000,000",
    deadline: 12,
    nationalite: "low",
    status: "Accepté",
  },
  {
    name: "Peter Doe",
    media: "L'Express",
    match: "1,000,000",
    deadline: 12,
    nationalite: "low",
    status: "En attente",
  },
  {
    name: "Peter Doe",
    media: "L'Express",
    match: "1,000,000",
    deadline: 12,
    nationalite: "low",
    status: "En attente",
  },
];

const deltaTypes: { [key: string]: DeltaType } = {
  Accepté: "moderateIncrease",
  Refusé: "moderateDecrease",
  "En attente": "unchanged",
};

export default function DashboardExample() {
  return (
    <div className="flex justify-center w-screen overflow-x-hidden">
      <Card className="m-10">
        <>
          <div>
            <Flex
              className="space-x-0.5"
              justifyContent="start"
              alignItems="center"
            >
              <Title>Demandes</Title>
              <Icon
                icon={InformationCircleIcon}
                variant="simple"
                tooltip="Liste des dernières demandes actives"
              />
            </Flex>
          </div>
          <div className="flex space-x-2"></div>
          <Table className="mt-6">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Nom</TableHeaderCell>
                <TableHeaderCell className="text-right">Media</TableHeaderCell>
                <TableHeaderCell className="text-right">Match</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Deadline
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Nationalité
                </TableHeaderCell>
                <TableHeaderCell className="text-right">Statut</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {requests.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-right">{item.media}</TableCell>
                  <TableCell className="text-right">{item.match}</TableCell>
                  <TableCell className="text-right">
                    {item.deadline} Jour(s)
                  </TableCell>
                  <TableCell className="text-right">
                    {item.nationalite}
                  </TableCell>
                  <TableCell className="text-right">
                    <BadgeDelta deltaType={deltaTypes[item.status]} size="xs">
                      {item.status}
                    </BadgeDelta>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      </Card>
    </div>
  );
}
