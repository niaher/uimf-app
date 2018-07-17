namespace UimfApp.Infrastructure.Validation
{
	using System;
	using FluentValidation;

	public class GenericValidator<T> : AbstractValidator<T>
	{
		public GenericValidator(Action<GenericValidator<T>> config)
		{
			config(this);
		}
	}
}
