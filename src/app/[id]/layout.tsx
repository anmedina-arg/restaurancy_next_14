function PageLayout({children}: {children: React.ReactNode}) {
  return <section className="flex h-full w-full flex-col justify-between">{children}</section>;
}

export default PageLayout;
