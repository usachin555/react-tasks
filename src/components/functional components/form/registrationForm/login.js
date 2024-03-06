const Loginn = () => {
  return (
    <div class="container mt-3">
      <h2>Stacked form</h2>
      <form action="/action_page.php">
        <div class="mb-3 mt-3">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="mb-3">
          <label for="pwd">Password:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          login
        </button>
      </form>
    </div>
  );
};
export default Loginn 
