import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: any) =>
              doc?.slug?.current
                ? `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/api/draft?secret=${process.env.NEXT_PUBLIC_SANITY_DRAFT_SECERT}&slug=${doc.slug.current}`
                : `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/api/draft?secret=${process.env.NEXT_PUBLIC_SANITY_DRAFT_SECERT}`,
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default defaultDocumentNode;
