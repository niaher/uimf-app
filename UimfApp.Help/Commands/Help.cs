namespace UimfApp.Help.Commands
{
    using System;
    using System.IO;
	using System.Threading;
	using System.Threading.Tasks;
    using Markdig;
    using MediatR;
    using UiMetadataFramework.Core;
    using UiMetadataFramework.Core.Binding;
    using UimfApp.Help.Security;
    using UimfApp.Infrastructure;
    using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.CustomProperties;
	using UimfApp.Infrastructure.Forms.Outputs;
    using UimfApp.Infrastructure.Security;

    [MyForm(Id = "help", PostOnLoad = true, Label = "")]
    [Secure(typeof(HelpActions), nameof(HelpActions.ViewHelpFiles))]
	public class Help : MyAsyncForm<Help.Request, Help.Response>
    {
        public override async Task<Response> Handle(Request message, CancellationToken cancellationToken)
        {
            var fileName = message.FileId;
            string content;

            try
            {
                // Open the text file using a stream reader.
                using (var sr = new StreamReader($"Help/{fileName}"))
                {
                    // Read the stream to a string, and write the string to the console.
                    content = await sr.ReadToEndAsync();
                }
            }
            catch (Exception)
            {
                throw new BusinessException($"Help file {message.FileId} could not be loaded.");
            }

            var result = Markdown.ToHtml(content);

            return new Response
            {
                Content = new Documentation
				{
                    Value = result
                }
            };
        }

        public class Response : FormResponse<MyFormResponseMetadata>
        {
            [OutputField(Label = "")]
			public Documentation Content { get; set; }
        }

        public class Request : IRequest<Response>
        {
            [InputField(Required = true, Hidden = true)]
            public string FileId { get; set; }
        }
    }
}
