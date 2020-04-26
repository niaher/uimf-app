{text}

<script>
	import moment from "moment";
	export let field;
	let text;
	
	$: {
		if (field.data != null){
			var dateTimeStyle = field.metadata.getCustomProperty("dateTimeStyle");
			var format ="D MMM YYYY";
			
			if(dateTimeStyle == "dateTime") {
				format = "D MMM YYYY HH:mm A";
			} else if(dateTimeStyle == "time") {
				format = "HH:mm";
			}

			text = moment(field.data).format(format);
		}

		text = "";
	}
</script>
