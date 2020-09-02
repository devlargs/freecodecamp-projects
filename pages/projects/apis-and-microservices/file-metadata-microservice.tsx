export default () => {
  return (
    <>
      <form
        action="/api/fileMetaData"
        method="POST"
        encType="multipart/form-data"
      >
        File: <input type="file" name="file" />
        <button>Submit</button>
      </form>
    </>
  );
};
