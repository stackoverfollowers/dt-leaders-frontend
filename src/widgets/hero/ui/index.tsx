import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@components/page-header';
// import { Announcement } from "./announcement";

export const Hero = () => {
  return (
    <PageHeader>
      {/* <Announcement /> */}
      <PageHeaderHeading>Vestibulum pretium sodales augue</PageHeaderHeading>
      <PageHeaderDescription>
        Nam elementum euismod lacus, non vehicula augue mattis nec. Integer sed sem porttitor,
        feugiat magna quis, consectetur mauris.
      </PageHeaderDescription>
    </PageHeader>
  );
};
