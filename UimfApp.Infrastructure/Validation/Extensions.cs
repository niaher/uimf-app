namespace UimfApp.Infrastructure.Validation
{
	using System.Linq;
	using FluentValidation;

	public static class Extensions
	{
		public static void ValidateAndThrowBusinessException<T>(this AbstractValidator<T> validator, T entity, string errorMessageSummary)
		{
			var result = validator.Validate(entity);

			if (!result.IsValid)
			{
				throw new BusinessException(errorMessageSummary + " Problems:\n" + result.Errors.Select(t => "* " + t.ErrorMessage).JoinStrings("\n"));
			}
		}
	}
}
