package Avtomatizaciya_Prodazhi2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_Prodazhi2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Менедж
 */
@Entity(name = "IISAvtomatizaciya_Prodazhi2Менедж")
@Table(schema = "public", name = "Менедж")
public class Menedzh {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrud")
    @Convert("Sotrud")
    @Column(name = "Сотруд", length = 16, unique = true, nullable = false)
    private UUID _sotrudid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrud", insertable = false, updatable = false)
    private Sotrud sotrud;


    public Menedzh() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}