<script runat="server" language="javascript">
  /**
   * Template level error handler
   * @param e error thrown
   */
  function handleError(e) {
    var errorLogMessages = Platform.Variable.GetValue("@errorLogMessages");
    Platform.Variable.SetValue('@errorLogMessages', errorLogMessages + e.description);
    Platform.Variable.SetValue('@errorDescription', Platform.Function.Stringify(e));
  }
</script>