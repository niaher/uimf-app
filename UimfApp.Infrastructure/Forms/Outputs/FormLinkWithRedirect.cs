namespace UimfApp.Infrastructure.Forms.Outputs
{
	using UiMetadataFramework.Basic.Output;

	/// <summary>
	/// Same as <see cref="FormLink"/>, but allows redirecting to another form right after 
	/// <see cref="FormLink"/> action has been "run". Only supports form links with <see cref="FormLink.Action"/>
	/// of type "run".
	/// </summary>
	public class FormLinkWithRedirect : FormLink
	{
		public FormLinkWithRedirect(FormLink self, FormLink redirectTo)
		{
			this.Label = self.Label;
			this.Form = self.Form;
			this.InputFieldValues = self.InputFieldValues;
			this.RedirectTo = redirectTo;

			// Only "run" action supports redirecting to another form after the action was run.
			// This is because other `FormLinkActions` do not actually run the child form and therefore
			// it makes no sense to redirect (e.g. - it makes no sense to redirect after having opened a modal dialog,
			// or after having already redirected to another page with `FormLinkAction.Redirect`).
			this.Action = FormLinkActions.Run;
		}

		/// <summary>
		/// Gets or sets form link to redirect to after this form link has been run.
		/// </summary>
		public FormLink RedirectTo { get; set; }
	}
}