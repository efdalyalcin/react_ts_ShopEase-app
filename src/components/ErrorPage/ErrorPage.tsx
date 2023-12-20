type Props = {
  error: unknown;
};

export default function ErrorPage({ error }: Props) {
  return <div>{`Error on the server: ${error}`}</div>;
}
