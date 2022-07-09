import { Fragment, useEffect, useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useFetchers,
	useMatches,
	useTransition,
} from "@remix-run/react";

import NProgress from "nprogress";
import nProgressStyles from "../public/nprogress/nprogress.css";

import Header from "~/components/header";
import { NotFound } from "./components/404";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Godson Joint",
	viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: nProgressStyles },
		{ rel: "stylesheet", href: "/css/app.css" },
	];
};

const Page = (
	{ children, links, suffix }: { children: any; links?: any; suffix?: any[] },
) => {
	return (
		<html lang="en">
			<head>
				<Meta />
				{links}
				<Links />
			</head>
			<body>
				<Header />
				<main>
					{children}
				</main>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
				{suffix?.map((item, id) => <Fragment key={id}>{item}</Fragment>)}
			</body>
		</html>
	);
};

export default function App() {
	const matches = useMatches();

	const links = matches.reduce((prev: any[], curr) => {
		return curr?.handle?.suffix ? [...prev, curr.handle?.suffix] : prev;
	}, []);

	let transition = useTransition();

	let fetchers = useFetchers();

	/**
	 * This gets the state of every fetcher active on the app and combine it with
	 * the state of the global transition (Link and Form), then use them to
	 * determine if the app is idle or if it's loading.
	 * Here we consider both loading and submitting as loading.
	 */
	let state = useMemo<"idle" | "loading">(
		function getGlobalState() {
			let states = [
				transition.state,
				...fetchers.map((fetcher) => fetcher.state),
			];
			if (states.every((state) => state === "idle")) return "idle";
			return "loading";
		},
		[transition.state, fetchers],
	);

	NProgress.configure({
		showSpinner: false,
	});

	useEffect(() => {
		// and when it's something else it means it's either submitting a form or
		// waiting for the loaders of the next location so we start it
		if (state === "loading") NProgress.start();
		// when the state is idle then we can to complete the progress bar
		if (state === "idle") NProgress.done();
	}, [transition.state]);

	return (
		<Page
			suffix={links}
		>
			<Outlet />
		</Page>
	);
}

export function CatchBoundary() {
	NProgress.done();
	return (
		<Page
			links={<link rel="stylesheet" href="/css/pages/404.css" />}
		>
			<NotFound />
		</Page>
	);
}
